function OscillatorInstrument (audioContext)
{
  // construction argument(s)

  this.context = audioContext
  
  // config variables

  this.msBetweenFrequencyChanges = 200 // how many milliseconds between changes in frequency
  this.minFrequency = 200 // hertz (oscillations per second)
  this.maxFrequency = 500 // hertz (oscillations per second)
  this.frequency = 300 // hertz (oscillations per second)
  this.type = 'sine' // type of wave the oscillator will produce

  // functions

  this.play = function()
  {
    this.oscillator = this.context.createOscillator()
    this.oscillator.connect(this.context.destination)
    this.changeFrequency(this.frequency)
    this.changeType(this.type)
    this.oscillator.start(0)

    // change the frequency of our wave (pitch) every X milliseconds
    // https://developer.mozilla.org/en-US/docs/web/javascript/reference/global_objects/function/bind
    this.interval = setInterval(this.changeFrequency.bind(this), this.msBetweenFrequencyChanges)
    // TODO http://www.andrewduthie.com/post/a-self-correcting-setinterval-alternative/
  }

  this.stop = function()
  {
    this.oscillator.stop(0)
    clearInterval(this.interval)
  }

  this.changeFrequency = function(val)
  {
    // no need to change frequency if we're trying to set it to the same value
    if (val == this.oscillator.frequency.value) return

    // we use this.frequency so that we can sniff its value and display it
    this.frequency = val ? val : this.getRandomInteger(this.minFrequency, this.maxFrequency)

    this.oscillator.frequency.value = this.frequency
  }

  this.changeDetune = function(val)
  {
    this.oscillator.detune.value = val
  }

  this.changeType = function(type)
  {
    this.type == type ? type : this.type
    this.oscillator.type = this.type
  }

  this.getRandomInteger = function(min, max)
  {
    var rI = Math.round(min + Math.random()*(max-min))
    return rI
  }
}
