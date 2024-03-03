using System;
using System.Collections.Generic;

namespace BunBo.Models;

public partial class Order
{
    public string OrderId { get; set; } = null!;

    public string CustomerId { get; set; } = null!;

    public string? Note { get; set; }

    public decimal Total { get; set; }

    public DateTime? CheckOutTime { get; set; }

    public DateTime? PreparedTime { get; set; }

    public DateTime? ShippingTime { get; set; }

    public DateTime? OrderCompletedTime { get; set; }

    public bool Status { get; set; }

    public virtual Customer Customer { get; set; } = null!;

    public virtual ICollection<OrderDetail> OrderDetails { get; set; } = new List<OrderDetail>();

    public virtual ICollection<Report> Reports { get; set; } = new List<Report>();
}
