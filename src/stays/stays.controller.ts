import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateStayDto, UpdateStayDto } from './dto';
import { StaysService } from './stays.service';

@Controller('stays')
export class StaysController {
  constructor(private readonly staysService: StaysService) {}

  @Post()
  create(@Body() createStayDto: CreateStayDto) {
    return this.staysService.create(createStayDto);
  }

  @Post('many')
  createMany(@Body() createStayDtos: CreateStayDto[]) {
    return this.staysService.createMany(createStayDtos);
  }

  @Get()
  findAll() {
    return this.staysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staysService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStayDto: UpdateStayDto) {
    return this.staysService.update(+id, updateStayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staysService.remove(id);
  }
}
