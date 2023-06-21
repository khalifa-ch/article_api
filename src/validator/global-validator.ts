import {
  ValidationPipe,
  BadRequestException,
  ValidationError,
  ValidationPipeOptions,
} from '@nestjs/common';

export class CustomValidationPipe extends ValidationPipe {
  constructor(options?: ValidationPipeOptions) {
    super({
      exceptionFactory: (errors: ValidationError[]) => {
        const transformedErrors = errors.map((error) => ({
          [error.property]: Object.values(error.constraints),
        }));
        return new BadRequestException(transformedErrors);
      },
      ...options,
    });
  }
}
