import './App.css'

function App() {
  return (
    <>
      <section className="container">
        <h1 style={{ textAlign: "center", marginBottom: "2rem" }}>JSON Extraction - Developed by <a href="https://fahadbd.com" target="_blank">Md. Fahad Monshi</a></h1>

        {/* API Form Section */}
        <form id='api-form'>
            <label htmlFor="apiurl" className="form-label">Base URL</label>
            <input type="text" className="apiurl" id="apiurl" placeholder='Enter API endpoint URL (www.fahadbd.com/convert)' />
          <button type="submit" className="api-submit-btn">Generate</button>
        </form>
        
        {/* API Response Section */}
        <div className='api-response'>
          <div id='response-json'>
            <p><b>Generated JSON</b></p>
            <div id='generated-json'>
              JSON will appear here
            </div>
          </div>
          <div id='base64-image'>
            <p><b>Image Preview</b></p>
            <div id='image-preview'>
              Generate JSON to see image
            </div>
          </div>
        </div>

        <button className='submit-btn'>Submit to API</button>

        {/* Final API Response */}
        <div className="final-reponse">
          <p style={{marginBottom: ".5rem"}}><b>API Response</b></p>
          <div id='api-final-response'>
            API Response will appear here
          </div>
        </div>

        {/* Response Validation */}
        <div className='response-validation'>
          <p><b>Response Validation</b></p>
          <p><h3>Pass</h3> Your API successfully extracted the JSON data from the image</p>
        </div>
      </section>
    </>
  )
}

export default App
