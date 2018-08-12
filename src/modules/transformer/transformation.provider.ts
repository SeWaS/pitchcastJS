import { Injectable } from '@nestjs/common'
import { classToPlain, plainToClass } from 'class-transformer'
import { ClassType } from 'class-transformer/ClassTransformer'

@Injectable()
export class Transformer {

    async transform<T, E>(value: T, newType: ClassType<E>): Promise<E> {
        const plain = classToPlain(value)
        return plainToClass(newType, plain)
    }

    async transformList<T, E>(value: T[], newType: ClassType<E>): Promise<E[]> {
        const plainList: object[] = value.map((item: T) =>  classToPlain(item))
        return plainList.map((item: object) => plainToClass(newType, item))
    }
}
