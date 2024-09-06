namespace Todos.Contracts
{
    public record TodoDto (Guid Id, string Title, string Description, bool IsCompleated);    
}
