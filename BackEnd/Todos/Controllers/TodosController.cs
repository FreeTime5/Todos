using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Todos.Contracts;
using Todos.DataAccess;
using Todos.Models;

namespace Todos.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TodosController : Controller
    {
        private readonly TodosDbContext _dbContext;

        public TodosController(TodosDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> Get([FromQuery] GetTodosRequest request, CancellationToken cancellationToken)
        {
            var query = _dbContext.Todos
                .Where(t => t.Date.Date == request.Date.Date)
                .OrderBy(t => t.IsCompleated);

             var notes = await query
                .Select(t => new TodoDto(t.Id, t.Title, t.Description, t.IsCompleated))
                .ToListAsync(cancellationToken);


            return Ok(new GetTodoResponse(notes));
        }

        [HttpPost]
        public async Task<IActionResult> CreateTodo([FromForm] CreateTodoRequest request, CancellationToken cancellationToken)
        {
            var todo = new Todo(request.Title, request.Description, new DateTime());

            await _dbContext.Todos.AddAsync(todo,cancellationToken);
            await _dbContext.SaveChangesAsync(cancellationToken);

            return Ok();
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteTodo([FromBody] DeleteTodoRequest request)
        {
            await _dbContext.Todos
                .Where(t => t.Id == request.Id)
                .ExecuteDeleteAsync();
            await _dbContext.SaveChangesAsync();

            return Ok();
        }
    }
}
