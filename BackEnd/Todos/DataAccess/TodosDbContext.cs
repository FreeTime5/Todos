using Microsoft.EntityFrameworkCore;
using Todos.Models;

namespace Todos.DataAccess
{
    public class TodosDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public TodosDbContext(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        public DbSet<Todo> Todos => Set<Todo>();

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(_configuration.GetConnectionString("Database"));
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
