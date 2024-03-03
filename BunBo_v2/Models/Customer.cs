using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace BunBo.Models;

public partial class Customer
{
    [Required(ErrorMessage = "Customer ID is required.")]
    [StringLength(50, ErrorMessage = "Customer ID cannot exceed 50 characters.")]
    public string CustomerId { get; set; } = null!;

    [Required(ErrorMessage = "Customer Name is required.")]
    [StringLength(100, ErrorMessage = "Customer Name cannot exceed 100 characters.")]
    public string CustomerName { get; set; } = null!;

    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Invalid Email Address.")]
    public string Email { get; set; } = null!;

    [Required(ErrorMessage = "Password is required.")]
    [StringLength(100, MinimumLength = 6, ErrorMessage = "Password must be between 6 and 100 characters.")]
    public string Password { get; set; } = null!;

    [Required(ErrorMessage = "Phone Number is required.")]
    [RegularExpression(@"^\d{10}$", ErrorMessage = "Invalid Phone Number. Phone Number must be 10 digits.")]
    public int PhoneNumber { get; set; }

    [Required(ErrorMessage = "Address is required.")]
    public string Address { get; set; } = null!;

    public bool Status { get; set; }

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
}
