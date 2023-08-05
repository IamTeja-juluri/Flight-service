const {StatusCodes}=require('http-status-codes');
const { CityRepository }=require('../repositories');
const AppError = require('../utils/errors/app-error');

const cityRepository=new CityRepository();


async function createCity(data){
    try{
        const city= await cityRepository.create(data);
        return city;
    }
    catch(error){
        console.log("Got error",error);
        
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanation=[];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log("explantion=",explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new City Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}

async function getCities(id){
    try{
        const cities= await cityRepository.getAll(id);
        return cities;
    }
    catch(error){
        console.log("Got error",error);
        
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanation=[];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log("explantion=",explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot get a cities Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}


async function getCity(id){
    try{
        const city= await cityRepository.get(id);
        return city;
    }
    catch(error){
        console.log("Got error",error);
        
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanation=[];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log("explantion=",explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a new City Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}


async function destroyCity(id){
    try{
        const city= await cityRepository.destroy(id);
        return city;
    }
    catch(error){
        console.log("Got error",error);
        
        if(error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError'){
            let explanation=[];
            error.errors.forEach((err) => {
                explanation.push(err.message);
            });
            console.log("explantion=",explanation);
            throw new AppError(explanation,StatusCodes.BAD_REQUEST);
        }
        throw new AppError('Cannot create a  City Object',StatusCodes.INTERNAL_SERVER_ERROR);
    }

}




module.exports={
   createCity,getCities,getCity,destroyCity
}