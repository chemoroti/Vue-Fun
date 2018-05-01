using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdminTool.Library;
using Microsoft.AspNetCore.Mvc;

namespace core_with_vuetify.Controllers
{
    [Route("apiv1/[controller]")]
    public class ApiController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Companys> TopCompanies()
        {
            AdminToolDB db = new AdminToolDB("Server=tcp:cc-dev.database.windows.net,1433;Initial Catalog=ClassicCars;User ID=cc-dev;Password=nrW8T*dA3W8aVxS9Py*2tGsfbPhQawcMpVhR$w$HJ65gMv4CZTs$9N92#m3!5ZnZn&ncMZejrwS8RTS$G6E2q;Connection Timeout=50000;", "System.Data.SqlClient");
            var companies = AdminTool.Library.Companys.GetList(db, 100, 0, "Id");

            return companies;
        }
    }

    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}