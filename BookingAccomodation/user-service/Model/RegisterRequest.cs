﻿using System.ComponentModel.DataAnnotations;

namespace user_service.Model
{
    public class RegisterRequest
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

       
        public string Username { get; set; }

        public string Password { get; set; }
    }
}
