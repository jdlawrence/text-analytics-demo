import * as R from 'ramda';

const Analyze = (inputText) => {
  const accessKey = process.env.REACT_APP_ANALYTICS_KEY;

  const message2 = {
    documents: [
      {
        id: 1,
        language: 'en',
        text: 'All I want for Christmas is my two front teeth!!'
      }
    ]
  }

  const mapIndexed = R.addIndex(R.map);

  const message = mapIndexed((val, idx) => {
    return {
      id: idx + 1,
      language: 'en',
      text: val,
    }
  })([inputText]);

  const messageObj = {
    documents: [message]
  }

  console.log('hhmmm', messageObj, message2, R.equals(messageObj, message2), R.difference(messageObj, message2));
  let requestParams = {
    method : 'POST',
    mode: 'cors',
    body: JSON.stringify(message2),
    headers : {
        'Ocp-Apim-Subscription-Key' : accessKey,
        "Content-Type": "application/json",
    }
};

  var request = new Request("https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases",requestParams);

  //first time using Request object
  fetch(request).then(function(result){
      return result.json()
  }).then(function(result){
      console.log(result);
      //logs Object {id: 101}
  }).catch(function(err){
      console.log(err);
  });
}

export default Analyze;