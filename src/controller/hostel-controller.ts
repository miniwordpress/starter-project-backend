import { Controller, Get, Post, Put, Delete, Param, Body, Patch } from '@nestjs/common';
import { HostelService } from '../service/hostel-service';
import { HostelDetail } from '../entity/hostel-entity';
import { HostelRequest } from '../model/dto/request/hostel-request';
import { HostelResponse } from '../model/dto/response/hostel-response';

@Controller('hostel')
export class HostelController {
  constructor(private readonly hostelService: HostelService) {}

  @Post('createHostel')
  async createHostelDetail(@Body() createHostelDetailDto : HostelRequest) : Promise<HostelDetail> {
    const newHostelDetail = this.hostelService.createHostelDetail(createHostelDetailDto);
    return newHostelDetail;
  }

  @Get('getAllHostelDetail')
  async getAllHostelDetail(): Promise<HostelDetail[]> {
    return await this.hostelService.getAllHostelDetail();
  }

  @Get('getAllHostelDetail/:id')
  async findOne(@Param('id') id: number): Promise<HostelDetail | null> {
    return await this.hostelService.getHosteilDetail(id);
  }

}