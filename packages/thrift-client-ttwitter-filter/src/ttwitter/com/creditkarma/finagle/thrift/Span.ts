/* tslint:disable */
/*
<<<<<<< HEAD
 * Autogenerated by @creditkarma/thrift-typescript v3.5.0
=======
 * Autogenerated by @creditkarma/thrift-typescript v3.6.2
>>>>>>> origin/master
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as __NAMESPACE__ from "./.";
export interface ISpan {
    trace_id?: thrift.Int64;
    name?: string;
    id?: thrift.Int64;
    parent_id?: thrift.Int64;
    annotations?: Array<__NAMESPACE__.IAnnotation>;
    binary_annotations?: Array<__NAMESPACE__.IBinaryAnnotation>;
    debug?: boolean;
}
export interface ISpanArgs {
    trace_id?: number | string | thrift.Int64;
    name?: string;
    id?: number | string | thrift.Int64;
    parent_id?: number | string | thrift.Int64;
    annotations?: Array<__NAMESPACE__.IAnnotationArgs>;
    binary_annotations?: Array<__NAMESPACE__.IBinaryAnnotationArgs>;
    debug?: boolean;
}
export const SpanCodec: thrift.IStructCodec<ISpanArgs, ISpan> = {
    encode(args: ISpanArgs, output: thrift.TProtocol): void {
        const obj = {
            trace_id: (typeof args.trace_id === "number" ? new thrift.Int64(args.trace_id) : typeof args.trace_id === "string" ? thrift.Int64.fromDecimalString(args.trace_id) : args.trace_id),
            name: args.name,
            id: (typeof args.id === "number" ? new thrift.Int64(args.id) : typeof args.id === "string" ? thrift.Int64.fromDecimalString(args.id) : args.id),
            parent_id: (typeof args.parent_id === "number" ? new thrift.Int64(args.parent_id) : typeof args.parent_id === "string" ? thrift.Int64.fromDecimalString(args.parent_id) : args.parent_id),
            annotations: args.annotations,
            binary_annotations: args.binary_annotations,
            debug: args.debug
        };
        output.writeStructBegin("Span");
        if (obj.trace_id != null) {
            output.writeFieldBegin("trace_id", thrift.TType.I64, 1);
            output.writeI64((typeof obj.trace_id === "number" ? new thrift.Int64(obj.trace_id) : typeof obj.trace_id === "string" ? thrift.Int64.fromDecimalString(obj.trace_id) : obj.trace_id));
            output.writeFieldEnd();
        }
        if (obj.name != null) {
            output.writeFieldBegin("name", thrift.TType.STRING, 3);
            output.writeString(obj.name);
            output.writeFieldEnd();
        }
        if (obj.id != null) {
            output.writeFieldBegin("id", thrift.TType.I64, 4);
            output.writeI64((typeof obj.id === "number" ? new thrift.Int64(obj.id) : typeof obj.id === "string" ? thrift.Int64.fromDecimalString(obj.id) : obj.id));
            output.writeFieldEnd();
        }
        if (obj.parent_id != null) {
            output.writeFieldBegin("parent_id", thrift.TType.I64, 5);
            output.writeI64((typeof obj.parent_id === "number" ? new thrift.Int64(obj.parent_id) : typeof obj.parent_id === "string" ? thrift.Int64.fromDecimalString(obj.parent_id) : obj.parent_id));
            output.writeFieldEnd();
        }
        if (obj.annotations != null) {
            output.writeFieldBegin("annotations", thrift.TType.LIST, 6);
            output.writeListBegin(thrift.TType.STRUCT, obj.annotations.length);
            obj.annotations.forEach((value_1: __NAMESPACE__.IAnnotationArgs): void => {
                __NAMESPACE__.AnnotationCodec.encode(value_1, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (obj.binary_annotations != null) {
            output.writeFieldBegin("binary_annotations", thrift.TType.LIST, 8);
            output.writeListBegin(thrift.TType.STRUCT, obj.binary_annotations.length);
            obj.binary_annotations.forEach((value_2: __NAMESPACE__.IBinaryAnnotationArgs): void => {
                __NAMESPACE__.BinaryAnnotationCodec.encode(value_2, output);
            });
            output.writeListEnd();
            output.writeFieldEnd();
        }
        if (obj.debug != null) {
            output.writeFieldBegin("debug", thrift.TType.BOOL, 9);
            output.writeBool(obj.debug);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): ISpan {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.I64) {
                        const value_3: thrift.Int64 = input.readI64();
                        _args.trace_id = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.name = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.I64) {
                        const value_5: thrift.Int64 = input.readI64();
                        _args.id = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.I64) {
                        const value_6: thrift.Int64 = input.readI64();
                        _args.parent_id = value_6;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 6:
                    if (fieldType === thrift.TType.LIST) {
                        const value_7: Array<__NAMESPACE__.IAnnotation> = new Array<__NAMESPACE__.IAnnotation>();
                        const metadata_1: thrift.IThriftList = input.readListBegin();
                        const size_1: number = metadata_1.size;
                        for (let i_1: number = 0; i_1 < size_1; i_1++) {
                            const value_8: __NAMESPACE__.IAnnotation = __NAMESPACE__.AnnotationCodec.decode(input);
                            value_7.push(value_8);
                        }
                        input.readListEnd();
                        _args.annotations = value_7;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 8:
                    if (fieldType === thrift.TType.LIST) {
                        const value_9: Array<__NAMESPACE__.IBinaryAnnotation> = new Array<__NAMESPACE__.IBinaryAnnotation>();
                        const metadata_2: thrift.IThriftList = input.readListBegin();
                        const size_2: number = metadata_2.size;
                        for (let i_2: number = 0; i_2 < size_2; i_2++) {
                            const value_10: __NAMESPACE__.IBinaryAnnotation = __NAMESPACE__.BinaryAnnotationCodec.decode(input);
                            value_9.push(value_10);
                        }
                        input.readListEnd();
                        _args.binary_annotations = value_9;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 9:
                    if (fieldType === thrift.TType.BOOL) {
                        const value_11: boolean = input.readBool();
                        _args.debug = value_11;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            trace_id: _args.trace_id,
            name: _args.name,
            id: _args.id,
            parent_id: _args.parent_id,
            annotations: _args.annotations,
            binary_annotations: _args.binary_annotations,
            debug: _args.debug
        };
    }
};
export class Span implements thrift.IStructLike, ISpan {
    public trace_id?: thrift.Int64;
    public name?: string;
    public id?: thrift.Int64;
    public parent_id?: thrift.Int64;
    public annotations?: Array<__NAMESPACE__.IAnnotation>;
    public binary_annotations?: Array<__NAMESPACE__.IBinaryAnnotation>;
    public debug?: boolean;
    constructor(args: ISpanArgs = {}) {
        if (args.trace_id != null) {
            const value_12: thrift.Int64 = (typeof args.trace_id === "number" ? new thrift.Int64(args.trace_id) : typeof args.trace_id === "string" ? thrift.Int64.fromDecimalString(args.trace_id) : args.trace_id);
            this.trace_id = value_12;
        }
        if (args.name != null) {
            const value_13: string = args.name;
            this.name = value_13;
        }
        if (args.id != null) {
            const value_14: thrift.Int64 = (typeof args.id === "number" ? new thrift.Int64(args.id) : typeof args.id === "string" ? thrift.Int64.fromDecimalString(args.id) : args.id);
            this.id = value_14;
        }
        if (args.parent_id != null) {
            const value_15: thrift.Int64 = (typeof args.parent_id === "number" ? new thrift.Int64(args.parent_id) : typeof args.parent_id === "string" ? thrift.Int64.fromDecimalString(args.parent_id) : args.parent_id);
            this.parent_id = value_15;
        }
        if (args.annotations != null) {
            const value_16: Array<__NAMESPACE__.IAnnotation> = new Array<__NAMESPACE__.IAnnotation>();
            args.annotations.forEach((value_19: __NAMESPACE__.IAnnotationArgs): void => {
                const value_20: __NAMESPACE__.IAnnotation = new __NAMESPACE__.Annotation(value_19);
                value_16.push(value_20);
            });
            this.annotations = value_16;
        }
        if (args.binary_annotations != null) {
            const value_17: Array<__NAMESPACE__.IBinaryAnnotation> = new Array<__NAMESPACE__.IBinaryAnnotation>();
            args.binary_annotations.forEach((value_21: __NAMESPACE__.IBinaryAnnotationArgs): void => {
                const value_22: __NAMESPACE__.IBinaryAnnotation = new __NAMESPACE__.BinaryAnnotation(value_21);
                value_17.push(value_22);
            });
            this.binary_annotations = value_17;
        }
        if (args.debug != null) {
            const value_18: boolean = args.debug;
            this.debug = value_18;
        }
    }
    public static read(input: thrift.TProtocol): Span {
        return new Span(SpanCodec.decode(input));
    }
    public static write(args: ISpanArgs, output: thrift.TProtocol): void {
        return SpanCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return SpanCodec.encode(this, output);
    }
}
