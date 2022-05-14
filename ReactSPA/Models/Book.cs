using System.Text.Json.Serialization;

using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace ReactSPA.Models
{

    public class Book
    {
        // Помечается для назначения этого свойства в качестве первичного ключа документа.
        [BsonId]
        // Помечается чтобы разрешить передачу параметра в качестве типа string вместо структуры
        // [BsonRepresentation(BsonType.ObjectId)]. Mongo обрабатывает преобразование из string в ObjectId.
        [BsonRepresentation(BsonType.ObjectId)]
        [JsonPropertyName("key")]
        public string Id { get; set; } = ObjectId.GenerateNewId().ToString();

        // Значение атрибута Name представляет имя свойства в коллекции MongoDB.
        [BsonElement("Name")]
        public string BookName { get; set; }

        public decimal Price { get; set; }

        public string Category { get; set; }

        public string Author { get; set; }
    }
}
