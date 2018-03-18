var officegen = require('officegen')

if (!typeof window == 'object') window = global
window.officegen = module.exports = officegen

var docx = officegen ( 'docx' );

docx.on ( 'finalize', function ( written ) {
			console.log ( 'Finish to create Word file.\nTotal bytes created: ' + written + '\n' );
		});

docx.on ( 'error', function ( err ) {
			console.log ( err );
		});


var table = [
    [{
        val: "No.",
        opts: {
            cellColWidth: 4261,
            b:true,
            sz: '48',
            shd: {
                fill: "7F7F7F",
                themeFill: "text1",
                "themeFillTint": "80"
            },
            fontFamily: "Avenir Book"
        }
    },{
        val: "Title1",
        opts: {
            b:true,
            color: "A00000",
            align: "right",
            shd: {
                fill: "92CDDC",
                themeFill: "text1",
                "themeFillTint": "80"
            }
        }
    },{
        val: "Title2",
        opts: {
            align: "center",
            cellColWidth: 42,
            b:true,
            sz: '48',
            shd: {
                fill: "92CDDC",
                themeFill: "text1",
                "themeFillTint": "80"
            }
        }
    }],
    [1,{val: "I have two spans.", opts: {gridSpan: 2}}],
    [{val: "I have three spans.", opts: {gridSpan: 3}}],
    [{val: "I have two spans.", opts: {gridSpan: 2}},'3'],
    [4,'watch out for the baobabs!','END']
];

var tableStyle = {
	tableColWidth: 4261,
	tableSize: 24,
	tableColor: "ada",
	tableAlign: "left",
	tableFontFamily: "Comic Sans MS",
	borders: true
}

docx.createTable (table, tableStyle);

const { Writable } = require('stream');
const outStream = new Writable({
  write(chunk, encoding, callback) {
    if (!this.data) {
      this.data = []
    }

    //Uint8Array.from(chunk).buffer
    // https://stackoverflow.com/questions/14653349/node-js-can%C2%B4t-create-blobs
    
    this.data.push(chunk)
    callback();
  },
  error(err) {
    console.error('error', err)
  }
});

outStream.on('finish', err => {
  window.data = outStream.data
  createDownloadLink(document.querySelector('#download-docx'), outStream.data, {
    name: 'Officegen-test.docx', 
    mime_type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  })
  alert('Document download created', err)
})

function createDownloadLink(a, data, opts = {}) {
  const { mime_type, name } = opts
  a = a || document.createElement('a')
  const blob = makeBlob(data)
  const url = window.URL.createObjectURL(blob);
  a.download = name
  a.href = url
  console.log('download created', data, blob, url)
  return a

  function makeBlob(data) {
    if (data instanceof Blob) {
      return data
    }
    if (typeof data == 'string') {
      data = [data]
    }
    return new Blob(data, {type: mime_type })
  }
}

window.createDownloadLink = createDownloadLink


const fsOutStream = fs.createWriteStream('/home/test.docx')

docx.generate ( outStream )

//docx.generate( fsOutStream )
