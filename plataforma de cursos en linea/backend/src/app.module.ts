import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsuariosModule } from './usuarios/usuarios.module';
import { CursosModule } from './cursos/cursos.module';
import { LeccionesModule } from './lecciones/lecciones.module';
import { InscripcionesModule } from './inscripciones/inscripciones.module';
import { CertificadosModule } from './certificados/certificados.module';

@Module({
  imports: [
    PrismaModule,
    UsuariosModule,
    CursosModule,
    LeccionesModule,
    InscripcionesModule,
    CertificadosModule,
    // Aquí iremos agregando tus nuevos módulos (Cursos, Usuarios, etc.)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}