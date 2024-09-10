export declare class MyObject{
    // expose value as field
    public value: number;

    constructor(num: number);
    // get value value with a getter
    public getValue(): number;
    public plusOne(): number;
    public multiply(num?: number): MyObject;
}