using System.ComponentModel.DataAnnotations;
using System.Runtime.CompilerServices;
using System.Security;
using Todos.Models;

namespace Todos.Contracts
{
    public record CreateTodoRequest(string Title, string Description);

}
