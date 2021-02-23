using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using VismaWebApi.Services;
using VismaWebApi.ViewModel;

namespace VismaWebApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {

        private readonly ILogger<EmployeeController> _logger;
        private readonly IEmployeeService _service;

        public EmployeeController(IEmployeeService service, ILogger<EmployeeController> logger)
        {
            _logger = logger;
            _service = service;
        }

        [HttpGet("getAll")]
        public IActionResult GetAllEmployees()
        {
            return new OkObjectResult(_service.GetAll());
        }

        [HttpPost("add")]
        public IActionResult AddNewEmployee([FromBody] EmployeeViewModel employee)
        {
            try
            {                
                if (employee != null)
                    return new OkObjectResult(_service.AddEmployee(employee));

                return new BadRequestObjectResult(new { message = "Invalid request!" });
            }
            catch(Exception e)
            {
                _logger.LogError("Error while saving new employee", e);
                return StatusCode(500, new { message = "Error while saving new employee" });
            }
        }
    }
}
