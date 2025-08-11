import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('LMS API')
  .setDescription('API documentation for Learning Management System')
  .setVersion('1.0')
  .addBearerAuth()
  .build();
