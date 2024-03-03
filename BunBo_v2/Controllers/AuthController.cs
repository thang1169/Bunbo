using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BunBo.Models;
using BunBo.Dto.Customer;

namespace BunBo.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly BunBoContext _context;

        public AuthController()
        {
            _context = new BunBoContext();
        }

        // API Login
        [HttpPost("signin")]
        public async Task<ActionResult<Customer>> Signin(string nameOrEmail, string password)
        {
            var customer = await _context.Customers
                   .FirstOrDefaultAsync(c => (c.CustomerName.Equals(nameOrEmail) || 
                                    c.Email.Equals(nameOrEmail) 
                                    && c.Password.Equals(password)));
            if (customer == null)
            {
                return NotFound();
            }
            return customer;
        }

        // API Register
        [HttpPost("signup")]
        public async Task<ActionResult<Customer>> Signup([FromBody] CustomerRequestDTO customerDto)
        {
            // Set Status to true by default
            var status = true;

            // Generate CustomerId with prefix 'Cxx'
            var latestCustomerId = await _context.Customers
                .OrderByDescending(c => c.CustomerId)
                .Select(c => c.CustomerId)
                .FirstOrDefaultAsync();

            var latestNumber = 0;
            if (latestCustomerId != null && latestCustomerId.StartsWith("C"))
            {
                int.TryParse(latestCustomerId.Substring(1), out latestNumber);
            }
            var newCustomerId = $"C{latestNumber + 1:00}";

            var customer = new Customer
            {
                CustomerId = newCustomerId,
                CustomerName = customerDto.CustomerName,
                Email = customerDto.Email,
                Password = customerDto.Password, // Consider hashing the password
                PhoneNumber = customerDto.PhoneNumber,
                Address = customerDto.Address,
                Status = status
            };

            _context.Customers.Add(customer);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(Signup), new { id = customer.CustomerId }, customer);
        }

    }
}
