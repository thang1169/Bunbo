﻿using System;
using System.Collections.Generic;

namespace BunBo.Models;

public partial class OrderDetail
{
    public string OrderDetailId { get; set; } = null!;

    public string OrderId { get; set; } = null!;

    public string ProductId { get; set; } = null!;

    public int Quantity { get; set; }

    public bool Status { get; set; }

    public virtual Order Order { get; set; } = null!;

    public virtual Product Product { get; set; } = null!;
}
