import * as R from 'ramda';

const Analyze = (inputText) => {
  var initObject = {
    method: 'POST',
    headers: new Headers(),
    mode: 'cors',
    body: "{}"
  }

  const accessKey = process.env.REACT_APP_ANALYTICS_KEY;

  const message = {
    documents: [
      {
        id: 1,
        language: 'en',
        text: 'The fetch API works really great for handling asynchronous results!',
      }
    ]
  }

  const text = 'The fetch API works really great for handling asynchronous results';

  const mapIndexed = R.addIndex(R.map);

  const message2 = mapIndexed((val, idx) => {
    return {
      id: idx,
      language: 'en',
      text: val,
    }
  })([text]);

  const message3 = R.addIndex(R.map)((val, idx) => {
    return {
      id: idx,
      language: 'en',
      text: val,
    }
  })([text]);
  console.log('message2', message2, message3);
  // const message3 = R.addIndex(R.map)((val, idx) => {
  //   return {
  //     id: idx,
  //     language: 'en',
  //     text: val,
  //   })
  //   ([text]);

  let requestParams = {
    method : 'POST',
    mode: 'cors',
    body: JSON.stringify(message),
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