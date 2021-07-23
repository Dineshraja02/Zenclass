var techSpec={
      dimension:{
            overAllLength:"3500mm",
            overAllWidth:"1600mm",
            overAllHeight:"1490mm",
            wheelBase:"2360mm",
            trackWidth:{front:"1405mm",rear:"1400mm"},
            minimumRadius:"4500mm",
      },
      capacities:{seatingCapacity:"5 persons",
                  fuelTankCapacity:"35litre"},
      engine:{type:"kb-series",
            noOfCylinders:3,  
            noOfValves:12,    
            capacity:"998cc/cm",    
            "bore*stroke":"73*79.5mm",
            compressionRatio:"10:1",
            maximumPower:"67/6.200PS/rpm",
            maximumTorque:"90/3.500Nm/rpm",
            fuelDistribusion:"multipointInjection"},
      transmission:{type:"5-speed MT"},
      Chassis:{
            steering:"Rack&pinion, Power assisted",
            brakes:{
                  front:"ventilated dics",
                  rear:"drums"
            },
            suspension:{
                  front:"Macpherson strut& coil spring",
                  rear:"isolated trailling link & coil Spring"
            },
            shockAbsorbers:"Gas filled",
            tyreTubeless:"15/80R13",
      },
      weights: {
            kerbWeightmin_full_option:"860-880kg",
            grossVehicleWeight:"1320kg"
      }   
}
console.log(techSpec.dimension)
console.log(techSpec.Chassis)
console.log(techSpec.capacities)
