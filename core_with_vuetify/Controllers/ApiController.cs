using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace core_with_vuetify.Controllers
{
    [Route("apiv1/[controller]")]
    public class ApiController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Company> TopCompanies()
        {
            List<Company> companies = new List<Company>();
            companies.Add(new Company() {
                Id = 1,
                Name = "Dayton's Company"
            });
            companies.Add(new Company() {
                Id = 2,
                Name = "Dayton's Other Company"
            });
            companies.Add(new Company() {
                Id = 3,
                Name = "Dayton's Last Company"
            });

            return companies;
        }
    }

    public class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}