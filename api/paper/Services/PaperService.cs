using System.Collections.Generic;
using System.Linq;
using System;
using paper.Models;
using Microsoft.Extensions.Configuration;
using MongoDB.Bson;
using MongoDB.Driver;

namespace paper.Service
{
    public class PaperService
    {
        private readonly IMongoCollection<Paper> _paper;

        public PaperService(IConfiguration config)
        {
            var client = new MongoClient(config.GetConnectionString("fiction-paper"));
            var database = client.GetDatabase("fiction-paper");
            _paper = database.GetCollection<Paper>("Papers");
        }

        public List<Paper> Get()
        {
            try {
                return _paper.Find(paper => true).ToList();
            }
            catch(Exception ex) {
                return null;
            }
        }

        public Paper Get(string id)
        {
            var docId = new ObjectId(id);

            return _paper.Find<Paper>(paper => paper.Id == docId).FirstOrDefault();
        }

        public Paper Create(Paper paper)
        {
            _paper.InsertOne(paper);
            return paper;
        }

        public void Update(string id, Paper paperIn)
        {
            var docId = new ObjectId(id);
            _paper.ReplaceOne(paper => paper.Id == docId, paperIn);
        }

        public void Remove(Paper paperIn)
        {
            _paper.DeleteOne(paper => paper.Name == paperIn.Name);
        }

        public void Remove(ObjectId id)
        {
            _paper.DeleteOne(paper => paper.Id == id);
        }
    }
}