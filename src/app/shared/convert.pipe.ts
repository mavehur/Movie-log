import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convert'
})

export class ConvertPipe implements PipeTransform {
    // value: 변환할 문자열값, fromChar: 변환대상문자, toChar: 변환되는 문자
    transform(value: string, fromChar:string, toChar:string): string {
        return value.replace(fromChar, toChar);
    }
}
    