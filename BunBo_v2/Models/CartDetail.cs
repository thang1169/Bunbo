using System;
using System.Collections.Generic;

namespace BunBo.Models;

public partial class CartDetail
{
    public string CartDetailId { get; set; } = null!;

    public string CartId { get; set; } = null!;

    public string ProductId { get; set; } = null!;

    public int Quantity { get; set; }

    public bool Status { get; set; }

    public virtual Cart Cart { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}
