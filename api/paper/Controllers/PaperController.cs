using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using paper.Models;
using paper.Service;

namespace paper.Controllers
{
    [Route("api/[controller]")]
    public class PapersController : Controller
    {
        private readonly PaperService _paperService;
    
        public PapersController(PaperService paperService) {
            _paperService = paperService;
        }
        
        // GET api/papers
        [HttpGet]
        public List<Paper> Get()
        {
            return _paperService.Get();
        }


        // POST api/papers
        [HttpPost]
        public void Post([FromBody]Paper paper)
        {
            _paperService.Create(paper);
        }

        // PUT api/papers
        [HttpPut("{name}")]
        public void Put(string name, [FromBody]Paper paper)
        {
            _paperService.Update(name, paper);
        }

        // DELETE api/papers
        [HttpDelete]
        public void Delete([FromBody]Paper paper)
        {
            _paperService.Remove(paper);
        }
    }
}
