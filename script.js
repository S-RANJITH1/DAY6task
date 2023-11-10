  // QUESTION 1


    class Movie {
     constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
     static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
    const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
    const casinoroyale1=new Movie("Casino Royale", "Eon Productions")
    const movies = [
       new Movie("Movie 1", "Studio A", "PG"),
       new Movie("Movie 2", "Studio B", "PG-13"),
       new Movie("Movie 3", "Studio C", "R"),
    casinoRoyale,
  ];
    const pgMovies = Movie.getPG(movies);
    console.log(pgMovies);
  
  

     // Question 2


     class Circle{
      constructer(radius,color)
     {
        this.radius=radius
        this.color=color
    }
     get radiusCircle()
    {
        return this.radius
    }
     set radiusCircle(radius)
{
     this.radius=radius
} 
      get colorCircle()
{
    return this.color 
}
    set colorCircle (color)
{
    this.color=color
}
    get toString( )
{
    return `Circle[radius=${this.radius},color=${this.color}]`
}
    get Circlearea()
{
    return Math.PI*this.radius*this.radius 
}
    get circumference()
{
    return 2*Math.PI*this.radius
}
}
    var data= new Circle(2.0,"red")
    data.radiusCircle=2.0
    console.log(data.radiusCircle)
    data.colorCircle="blue"
    console.log(data.colorCircle)
    console.log(data.toString)
    console.log(data.Circlearea)
    console.log(data.circumference)

  
 //Question 3


    class Person{
    constructor(names,age,salary,gender){   
    this.names=names
    this.age=age
    this.salary=salary
    this.gender=gender
}
}
    var obj1=new Person("ranjith",27,80000,"male")
   console.log(obj1.names)
   console.log(obj1.age);
   console.log(obj1.salary);
   console.log(obj1.gender);

   //Question 4

   class uber {
    constructor(pricePerKilometer = 60) {
      this.pricePerKilometer = pricePerKilometer;
    }

    set pricePerKilometer(newPrice) {
      if (newPrice >= 0) {
        this._pricePerKilometer = newPrice;
      } else {
        console.log("Price per kilometer must be non-negative.");
      }
    }

    get pricePerKilometer() {
      return this._pricePerKilometer;
    }

    calculatePrice(kilometers) {
      if (kilometers < 0) {
        return "Distance must be non-negative.";
      }

      const fare = this.pricePerKilometer * kilometers;
      return `Your Uber ride of ${kilometers} kilometers will cost $${fare.toFixed(2)}`;
    }
  }


      const calculator = new uber(60)
      const kilometers = 5;
      const price = calculator.calculatePrice(kilometers);
      console.log(price); 




      