using System;
using System.Collections.Generic;

namespace BunBo.Models;

public partial class Product
{
    public string ProductId { get; set; } = null!;

    public string RestaurantId { get; set; } = null!;

    public string ProductName { get; set; } = null!;

    public string? Description { get; set; }

    public decimal Price { get; set; }

    public byte[]? Image { get; set; }

    public bool Status { get; set; }

    public virtual ICollection<CartDetail> CartDetails { get; set; } = new List<CartDetail>();

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual Restaurant Restaurant { get; set; } = null!;

    public virtual ICollection<Review> Reviews { get; set; } = new List<Review>();
}
