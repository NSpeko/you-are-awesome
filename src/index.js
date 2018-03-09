// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {return {propertyName}};
const createNotEnumerableProperty = (propertyName) => {
    if (Object[propertyName]) delete Object.propertyName;
    Object.defineProperty(Object.prototype, propertyName, {
        enumerable: false,
        set: function (x) {
            Object.prototype.propertyName = x;
        },
        get: function () {
            return Object.prototype.propertyName;
        }
    });
    return propertyName;
};
const createProtoMagicObject = () => {return Function;};
const incrementor = () => {};
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {setTimeout(()=>{resolve(param);},1001);});
};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = (arr) => {
    return arr.sort((obj1,obj2)=>{
        return obj1.__proto__>obj2.__proto__;
});
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;