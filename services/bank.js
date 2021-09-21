const {Bank} = require('../model');

const add = async newBank => {
    try {
        console.log("BBBOOODDDUYYY", newBank);
        const result = await Bank.create(newBank);
        return result;
    } catch (error) {
        if(error.message.includes("Cast to ObjectId failed")){
            return null;
        }
        throw error;
    }
};

const getAll = async() => {
    try {
        console.log('SERVISE GETALL')
        const result = await Bank.find({});
        return result;
    } catch (error) {
        if(error.message.includes("Cast to ObjectId failed")){
            return null;
        }
        throw error;
    }
}

const getOne = async(id) => {
    try {
        const result = await Bank.findById(id);
        return result;
    } catch (error) {
        if(error.message.includes("Cast to ObjectId failed")){
            return null;
        }
        throw error;
    }
}
const del = async(id) => {
    try {
        const result = await Bank.findByIdAndDelete(id);
        return result;
    } catch (error) {
        if(error.message.includes("Cast to ObjectId failed")){
            return null;
        }
        throw error;
    }
}

const update = async(id, updateBank)  => {
    try {
        const result = await Bank.findByIdAndUpdate(id, updateBank, {new: true});
        return result;
    } catch (error) {
        if(error.message.includes("Cast to ObjectId failed")){
            return null;
        }
        throw error;
    }
}
module.exports = {
    add,
    del,
    getAll,
    update,
    getOne,
}