namespace Todos.Models
{
    public class Todo
    {
        public Todo(string title, string description, DateTime date)
        {
            Title = title;
            Description = description;
            Date = date;
            IsCompleated = false;
        }

        public Guid Id { get; set; }

        public string Title { get; init; }

        public string Description { get; init; }

        public bool IsCompleated { get; init; }

        public DateTime Date { get; init; }

    }

    public enum TodoType
    {
        OneTime,
        Daily,
        Weakly
    }
}
