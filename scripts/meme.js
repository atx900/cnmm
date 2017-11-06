document.getElementById('getMeme').addEventListener('click', getMeme)
document.getElementById('tweetMeme').addEventListener('click', tweetMeme)

var output = ''

function getMeme () {
  var xhr = new XMLHttpRequest()

  xhr.open('GET', 'https://api.icndb.com/jokes/random', true)       // access the internet Chuck Norris database API
  xhr.onload = function () {
    if (this.status === 200) {
      var joke = JSON.parse(this.responseText)
      output = joke.value.joke
      document.getElementById('memeText').innerHTML = output
    } else {
      console.log('Error connection...')
    }
  }
  xhr.send()
}

function tweetMeme () {                                              // access the Twitter API to share meme
  if (output === '') {
    output = 'Oops! You forgot to click the "Get Meme" button. '
    document.getElementById('memeText').innerHTML = output
  } else {
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(output) + ' -- The Chuck Norris Meme Machine')
  }
}
