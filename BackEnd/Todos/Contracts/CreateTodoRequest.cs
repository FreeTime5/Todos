using Todos.Models;

namespace Todos.Contracts
{
    public record CreateTodoRequest (string Title, string Description, DateTime Date);

}
