import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StaysService } from './stays.service';
import { CreateStayDto } from './dto/create-stay.dto';
import { UpdateStayDto } from './dto/update-stay.dto';

@Controller('stays')
export class StaysController {
  constructor(private readonly staysService: StaysService) {}

  @Post()
  create(@Body() createStayDto: CreateStayDto) {
    return this.staysService.create(createStayDto);
  }

  @Get()
  findAll() {
    return this.staysService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.staysService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStayDto: UpdateStayDto) {
    return this.staysService.update(+id, updateStayDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.staysService.remove(+id);
  }
}
