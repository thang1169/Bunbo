using System;
using System.Collections.Generic;

namespace BunBo.Models;

public partial class Review
{
    public string ReviewId { get; set; } = null!;

    public string CustomerId { get; set; } = null!;

    public string ProductId { get; set; } = null!;

    public int Rating { get; set; }

    public string? Comment { get; set; }

    public bool Status { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}
