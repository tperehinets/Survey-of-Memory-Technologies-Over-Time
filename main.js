
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const uri = process.env.uri;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


// try keeping as excel and jsut iterate to insert
async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const db = client.db('NVMS');

    db.createCollection('Emerging');
    db.createCollection('Established');


    const emerging = db.collection('Emerging');
    const established = db.collection('Established');

    const emergingDocuments = [
        {
            name: "STTMRAM",
            cell_area: 50, //F2
            year: 2016, 
            voltage: 1.5, // V
            read_time: 10,// ns
            write_time: 10, //ns
            retention: 10, // years
            endurence: 1E15,
            write_energy: 0.1, // pJ
            material: "magnetic tunnel junction structure", 
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        },

        {
            name: "PCRAM",
            cell_area: 30, //F2
            year: 2016, 
            voltage: 3, // V
            read_time: 10,// ns
            write_time: 50, //ns
            retention: 10, // years
            endurence: 1E9,
            write_energy: 10, // pJ
            material: "GST materials", 
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        },

        {
            name: "RRAM",
            cell_area: 12, //F2
            year: 2016, 
            voltage: 3, // V
            read_time: 10,// ns
            write_time: 10, //ns
            retention: 10, // years
            endurence: 1E12,
            write_energy: 0.1, // pJ
            material: "OxRAM’s filament", 
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        },
        // STORAGE CAPACITY SECTION
        {
            name: "STTMRAM",
            year: 2006,
            storage_capacity: 1, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        },
        {
            name: "STTMRAM",
            year: 2006,
            storage_capacity: 1, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "STTMRAM",
            year: 2007,
            storage_capacity: 2, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        },
        {
            name: "STTMRAM",
            year: 2007,
            storage_capacity: 4, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        },
        {
            name: "STTMRAM",
            year: 2007,
            storage_capacity: 8, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        },
        {
            name: "STTMRAM",
            year: 2010,
            storage_capacity: 64, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        },
        {
            name: "STTMRAM",
            year: 2011,
            storage_capacity: 1, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "STTMRAM",
            year: 2013,
            storage_capacity: 64, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "PCRAM",
            year: 2005,
            storage_capacity: 64, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        },
        {
            name: "PCRAM",
            year: 2006,
            storage_capacity: 128, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        },
        {
            name: "PCRAM",
            year: 2007,
            storage_capacity: 256, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        },
        {
            name: "PCRAM",
            year: 2008,
            storage_capacity: 128, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "PCRAM",
            year: 2010,
            storage_capacity: 1000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "PCRAM",
            year: 2011,
            storage_capacity: 1000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "PCRAM",
            year: 2011,
            storage_capacity: 1000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "PCRAM",
            year: 2012,
            storage_capacity: 8192, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "RRAM",
            year: 2011,
            storage_capacity: 8, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "RRAM",
            year: 2012,
            storage_capacity: 8, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "RRAM",
            year: 2012,
            storage_capacity: 10, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "RRAM",
            year: 2012,
            storage_capacity: 10, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "RRAM",
            year: 2013,
            storage_capacity: 32768, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "RRAM",
            year: 2014,
            storage_capacity: 1, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 

        {
            name: "STTMRAM",
            year: 2007,
            read_bandwidth: 400, // MB/s
            write_bandwidth: 400,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        }, 

        {
            name: "STTMRAM",
            year: 2006,
            read_bandwidth: 250, // MB/s
            write_bandwidth: 250,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        }, 

        {
            name: "PCRAM",
            year: 2010,
            read_bandwidth: 250, // MB/s
            write_bandwidth: 10,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        }, 

        {
            name: "RRAM",
            year: 2014,
            read_bandwidth: 1000, // MB/s
            write_bandwidth: 200,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        }, 

        {
            name: "RRAM",
            year: 2011,
            read_bandwidth: 200, // MB/s
            write_bandwidth: 1000,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        }, 

        {
            name: "RRAM",
            year: 2012,
            read_bandwidth: 300, // MB/s
            write_bandwidth: 300,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        }, 

        {
            name: "RRAM",
            year: 2016,
            storage_density: 2, // bits per cell
            write_cycles: 10, // million
            source: 'https://www.theregister.com/2016/05/18/ibm_show_off_novel_storage_technology_with_a_new_memory_chip/'

        }, 
        {
            name:'STTMRAM',
            year: 2020, 
            retention:  0.0833, 
            write_time: 10, 
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9265042'
    
        }, 
        {
            name:'STTMRAM',
            year: 2020, 
            retention:  10, 
            write_time: 100, 
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9265042'
    
        }




        


        


    ]

    const establishedDocuments = [
        {
            name: "SRAM",
            cell_area: 100, //F2
            year: 2016, 
            voltage: 1, // V
            read_time: 1,// ns
            write_time: 1, //ns
            endurence: 1E16,
            write_energy: 0.001, // pJ
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

             
        },
        {
            name: "DRAM",
            cell_area: 6, //F2
            year: 2016, 
            voltage: 1, // V
            read_time: 10,// ns
            write_time: 10, //ns
            retention: 0.00000000203,
            endurence: 1E16,
            write_energy: 0.01, // pJ
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

             
        }, 
        {
            name: "Flash",
            year: 2005,
            storage_capacity: 100, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2005,
            storage_capacity: 1000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2005,
            storage_capacity: 1000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2006,
            storage_capacity: 1000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2006,
            storage_capacity: 10000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2007,
            storage_capacity: 1000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2008,
            storage_capacity: 1000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2008,
            storage_capacity: 10000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2009,
            storage_capacity: 10000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2009,
            storage_capacity: 100000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2010,
            storage_capacity: 128000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2011,
            storage_capacity: 128000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2012,
            storage_capacity: 128000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2013,
            storage_capacity: 128000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "Flash",
            year: 2014,
            storage_capacity: 128000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "NAND",
            year: 2014,
            storage_capacity: 128000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 
        {
            name: "NAND",
            year: 2015,
            storage_capacity: 128000, // Mb
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 

        {
            name: "NAND",
            year: 2008,
            read_bandwidth: 200, // Mb
            write_bandwidth: 100,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'


        }, 

        {
            name: "NAND",
            year: 2012,
            read_bandwidth: 250, // Mb
            write_bandwidth: 30,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 

        {
            name: "NAND",
            year: 2011,
            read_bandwidth: 250, // Mb
            write_bandwidth: 20,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 

        {
            name: "NAND",
            year: 2010,
            read_bandwidth: 200, // Mb
            write_bandwidth: 10,
            source: 'https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=7495087&tag=1&tag=1'

        }, 




    ]




    // Instert documents into the collection
    const em = emerging.insertMany(emergingDocuments);
    const est = established.insertMany(establishedDocuments);

    const document = await emerging.find({"name": "STTMRAM"}).toArray();


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
