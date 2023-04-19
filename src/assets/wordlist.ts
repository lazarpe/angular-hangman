class WordList {

  public constructor() {
  }

  getWordLists(): Map<string, string[]> {
    return new Map([
      ['car', this.getCarWords()],
      ['food', this.getFoodWords()],
      ['animal', this.getAnimalWords()]
    ]);
  }

  getCarWords(): string[] {
    return [
      'car',
      'truck',
      'bus',
      'motorcycle',
      'scooter',
      'bicycle',
      'train',
      'plane',
      'boat',
      'ship',
      'sailboat',
      'submarine',
      'tank',
      'tractor',
      'semi',
      'ambulance',
      'firetruck',
      'police car',
      'taxi',
      'limousine',
      'convertible',
      'coupe',
      'sedan',
      'hatchback',
      'wagon',
      'minivan',
      'suv',
      'crossover',
      'pickup',
      'van',
      'roadster'
    ];
  }

  getFoodWords(): string[] {
    return [
      'apple',
      'banana',
      'orange',
      'grape',
      'strawberry',
      'blueberry',
      'raspberry',
      'blackberry',
      'watermelon',
      'melon',
      'pineapple',
      'mango',
      'kiwi',
      'pear',
      'peach',
      'plum',
      'cherry',
      'apricot',
      'avocado',
      'coconut',
      'lemon',
      'lime',
      'cucumber',
      'tomato',
      'potato',
      'onion',
      'garlic',
      'carrot',
      'broccoli',
      'cauliflower',
      'cabbage',
      'lettuce',
      'spinach',
      'asparagus',
      'peas',
    ];
  }

  getAnimalWords(): string[] {
    return [
      'dog',
      'cat',
      'bird',
      'fish',
      'turtle',
      'snake',
      'lizard',
      'frog',
      'toad',
      'hamster',
      'gerbil',
      'mouse',
      'rat',
      'rabbit',
      'cow',
      'pig',
      'horse',
      'sheep',
      'goat',
      'chicken',
      'duck',
      'goose',
      'turkey',
      'eagle',
      'hawk',
      'owl',
      'parrot',
      'penguin',
      'seagull',
      'dolphin',
      'whale',
      'shark',
      'octopus',
      'squid',
    ];
  }
}
