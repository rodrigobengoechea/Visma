using System.Collections.Generic;
using System.Linq;
using VismaWebApi.ViewModel;

namespace VismaWebApi.Services
{
    public interface IEmployeeService
    {
        ResultViewModel AddEmployee(EmployeeViewModel newEmployee);
        List<EmployeeViewModel> GetAll();
    }

    public class EmployeeService : IEmployeeService
    {
        private readonly List<EmployeeViewModel> _employees = new List<EmployeeViewModel>()
        {
            new EmployeeViewModel()
            {
                FirstName = "Rodrigo", LastName = "Bengoechea", SocialSecurityNumber = 12321412, Phone = 89086
            },
            new EmployeeViewModel()
            {
                FirstName = "Jose", LastName = "Perez", SocialSecurityNumber = 9887333
            }
        };

        public List<EmployeeViewModel> GetAll() => _employees;

        public ResultViewModel AddEmployee(EmployeeViewModel newEmployee)
        {
            var alreadyExists = _employees.FirstOrDefault(e => e.SocialSecurityNumber == newEmployee.SocialSecurityNumber) != null;

            if (alreadyExists)
            {
                return new ResultViewModel() { Success = false, ErrorMessage = $"An employee with Social Security Number {newEmployee.SocialSecurityNumber} already exists" };
            }

            _employees.Add(newEmployee);
            return new ResultViewModel() { Success = true };
        }
    }
}
