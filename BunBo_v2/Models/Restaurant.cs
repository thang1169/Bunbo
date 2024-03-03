using System;
using System.Collections.Generic;

namespace BunBo.Models;

public partial class Restaurant
{
    public string RestaurantId { get; set; } = null!;

    public string RestaurantName { get; set; } = null!;

    public string? Description { get; set; }

    public bool Status { get; set; }

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
