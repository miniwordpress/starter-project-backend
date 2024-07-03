import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HostelDetail } from 'src/entity/hostel-entity';
import { HostelRequest } from 'src/model/dto/request/hostel-request';
import { HostelResponse } from 'src/model/dto/response/hostel-response';
import { promises } from 'dns';

@Injectable()
export class HostelService {
    constructor(
        @InjectRepository(HostelDetail)
        private hostelRepository: Repository<HostelDetail>,
    ){}

    async createHostelDetail(createHostelDetail: HostelDetail): Promise<HostelDetail> {
        const newHostelDetail = this.hostelRepository.create(createHostelDetail);
        return await this.hostelRepository.save(newHostelDetail);
    }

    getAllHostelDetail(): Promise<HostelDetail[]> {
        return this.hostelRepository.find();
    }

    getHosteilDetail(id:number): Promise<HostelDetail | null> {
        return this.hostelRepository.findOneBy({ id });
    }

    async updateHostelDetail(
        id: number,
        updateHostelDetail: HostelDetail,
    ): Promise<HostelDetail | null> {

        for (let detail in updateHostelDetail) {
            if (detail == null || detail.trim().length == 0) {
                throw new Error(`${detail} is null`);
            }
        } 

        const existingHostelDetail = await this.hostelRepository.findOneBy({ id });
        existingHostelDetail.hostelName = updateHostelDetail.hostelName;
        existingHostelDetail.hostelType = updateHostelDetail.hostelType;
        existingHostelDetail.address = updateHostelDetail.address;
        existingHostelDetail.tel = updateHostelDetail.tel;
        existingHostelDetail.email = updateHostelDetail.email;
        existingHostelDetail.price = updateHostelDetail.price

        if(!existingHostelDetail) {
            throw new Error('No existingHostelDetail');
        }

        const updateHostel = await this.hostelRepository.save(existingHostelDetail);
        return updateHostelDetail;
    }
    
    async deleteHostelDetail(id: number): Promise<void>{
        await this.hostelRepository.delete(id);
    }
 }
