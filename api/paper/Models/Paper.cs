using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace paper.Models
{
    public class Paper
    {
        public ObjectId Id { get; set; }

        [BsonElement("Name")]
        public string Name { get; set; }

        [BsonElement("Metadata")]
        public decimal MetaData { get; set; }
    }
}