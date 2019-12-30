const data = [
    {
        type: 'renderTitle',
        content: 'copy-webpack-plugin'
    },
    {
        type: 'renderHtml',
        content: `
         <codeBlock>
            const CopyPlugin = require('copy-webpack-plugin')
            new CopyPlugin([
                {
                  from: path.join(__dirname, './src/statics/'),
                  to: path.resolve(__dirname, './dist/statics')
                }
              ])
          </codeBlock>
        `
    },
    {
      type: 'renderTitle',
      content: 'html-webpack-plugin'
    },
    {
        type: 'renderHtml',
        content: `
        <codeBlock>
           
          </codeBlock>
        `
    },
    {
      type: 'renderTitle',
      content: 'webpack.DefinePlugin'
    },
    {
        type: 'renderHtml',
        content: `
        <codeBlock>
           
          </codeBlock>
        `
    },
    {
      type: 'renderTitle',
      content: 'webpack-runtime-public-path-plugin'
    },
    {
        type: 'renderHtml',
        content: `
        <codeBlock>
           
          </codeBlock>
        `
    },
    
]


export default data
