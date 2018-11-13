import * as R from 'ramda';

const Analyze = (inputText, handleResponse) => {
  const accessKey = process.env.REACT_APP_ANALYTICS_KEY;

  const mapIndexed = R.addIndex(R.map);

  const message = mapIndexed((val, idx) => {
    return {
      id: idx + 1,
      language: 'en',
      text: val,
    }
  })([inputText]);

  const messageObj = {
    documents: message
  }

  let requestParams = {
    method : 'POST',
    mode: 'cors',
    body: JSON.stringify(messageObj),
    headers : {
        'Ocp-Apim-Subscription-Key' : accessKey,
        "Content-Type": "application/json",
    }
  };

  const extractKeyPhrasesString = R.pipe(
    R.path(['documents']),
    R.head,
    R.path(['keyPhrases']),
    R.join(' ')
  );

  var request = new Request("https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/keyPhrases",requestParams);

  fetch(request).then(function(result){
    return result.json()
  }).then(function(result){
    const keyPhrasesString = extractKeyPhrasesString(result);
    handleResponse(keyPhrasesString);
  }).catch(function(err){
    handleResponse(err);
  });
}

export default Analyze;