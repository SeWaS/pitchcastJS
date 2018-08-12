import { Module, Global } from '@nestjs/common'
import { Transformer } from './transformation.provider'

@Global()
@Module({
    providers: [Transformer],
    exports: [Transformer]
})
export class GlobalTransformerModule {}
