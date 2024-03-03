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
    public class CustomersController : ControllerBase
    {
        private readonly BunBoContext _context;

        public CustomersController()
        {
            _context = new BunBoContext();
        }

        // GET: api/Customers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Customer>>> GetCustomers()
        {
            return await _context.Customers.ToListAsync();
        }

        // GET: api/Customers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Customer>> GetCustomer(string id)
        {
            var customer = await _context.Customers.FindAsync(id);

            if (customer == null)
            {
                return NotFound();
            }

            return customer;
        }

        // PUT: api/Customers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        /*[HttpPut("{id}")]
        public async Task<IActionResult> PutCustomer(string id, Customer customer)
        {
            if (id != customer.CustomerId)
            {
                return BadRequest();
            }

            _context.Entry(customer).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CustomerExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Customers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Customer>> PostCustomer(Customer customer)
        {
            _context.Customers.Add(customer);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (CustomerExists(customer.CustomerId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetCustomer", new { id = customer.CustomerId }, customer);
        }*/

        [HttpPut]
        public async Task<IActionResult> UpdateCustomer([FromBody] CustomerUpdateDTO customerDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var customer = await _context.Customers.FindAsync(customerDto.customerID);
            if (customer == null)
            {
                return NotFound($"Customer with ID {customerDto.customerID} not found.");
            }

            customer.CustomerName = customerDto.CustomerName;
            customer.Email = customerDto.Email;
            customer.Password = customerDto.Password; // Remember to hash the password
            customer.PhoneNumber = customerDto.PhoneNumber;
            customer.Address = customerDto.Address;
            // Do not update CustomerId and Status as they are not expected to change

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Customers.Any(e => e.CustomerId == customer.CustomerId))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent(); // Standard response for a successful PUT request
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCustomer(string id)
        {
            var customer = await _context.Customers.FindAsync(id);
            if (customer == null)
            {
                return NotFound($"Customer with ID {id} not found.");
            }

            _context.Customers.Remove(customer);
            await _context.SaveChangesAsync();

            return NoContent(); // Standard response for a successful DELETE request
        }



        // DELETE: api/Customers/5
        /* [HttpDelete("{id}")]
         public async Task<IActionResult> DeleteCustomer(string id)
         {
             var customer = await _context.Customers.FindAsync(id);
             if (customer == null)
             {
                 return NotFound();
             }

             _context.Customers.Remove(customer);
             await _context.SaveChangesAsync();

             return NoContent();
         }

         private bool CustomerExists(string id)
         {
             return _context.Customers.Any(e => e.CustomerId == id);
         }*/
    }

}
