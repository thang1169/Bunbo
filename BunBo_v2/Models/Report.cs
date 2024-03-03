using System;
using System.Collections.Generic;

namespace BunBo.Models;

public partial class Report
{
    public string ReportId { get; set; } = null!;

    public string OrderId { get; set; } = null!;

    public string ReportName { get; set; } = null!;

    public DateTime DateCreate { get; set; }

    public bool Status { get; set; }

    public virtual Order Order { get; set; } = null!;
}
