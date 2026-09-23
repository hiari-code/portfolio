using Microsoft.AspNetCore.Mvc;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
	options.AddDefaultPolicy(policy => policy
		.AllowAnyOrigin()
		.AllowAnyHeader()
		.AllowAnyMethod());
});

var app = builder.Build();

app.UseCors();

app.MapPost("/api/contact", ([FromBody] ContactMessage message) =>
{
	if (string.IsNullOrWhiteSpace(message.Email) || string.IsNullOrWhiteSpace(message.Message))
	{
		return Results.BadRequest(new { error = "Email and message are required." });
	}

	return Results.Ok(new { message = "Thanks. Your message has been received." });
});

app.Run();

record ContactMessage(string Email, string Message);
