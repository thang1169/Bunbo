using System;
using System.Collections.Generic;

namespace BunBo.Models;

public partial class Cart
{
    public string CartId { get; set; } = null!;

    public string CustomerId { get; set; } = null!;

    public string? Note { get; set; }

    public int Total { get; set; }

    public bool Status { get; set; }

    public virtual ICollection<CartDetail> CartDetails { get; set; } = new List<CartDetail>();

    public virtual Customer Customer { get; set; } = null!;
}
