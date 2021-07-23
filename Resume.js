var techspec={
      dimension:{
            overAllLength:"3500mm",
            overallwidth:"1600mm",
            overallheight:"1490mm",
            wheelbase:"2360mm",
            trackwidth:{front:"1405mm",rear:1400},
            minimumradius:"4500mm",
      },
      capacities:{seatingcapacity:"5 persons",
                  fueltankcapacity:"35litre"},
      engine:{type:"kb-series",
            noofcylinders:3,  
            noofvalves:12,    
            capacity:"998cc/cm",    
            "bore*stroke":"73*79.5mm",
            compressionRatio:"10:1",
            maximumPower:"67/6.200PS/rpm",
            maximumtorque:"90/3.500Nm/rpm",
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
console.log(techspec.capacities)